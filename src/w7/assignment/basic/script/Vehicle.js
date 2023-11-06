class Vehicle {
    // Vehicle이라는 객체를 생성
    constructor(x, y, mass, rad, speedMx, forceMx, color) {
      // 안에있는 변수들을 초기화해주는 생성자(constructor)를 이용해 실행하고 돌아왔을 때 들어있는 값들을 초기화 해준다.
      this.pos = createVector(x, y);
        //pos값의 초기화, 초기 위치설정
      this.vel = p5.Vector.random2D();
    // vel값의 초기화, 속도는 1이고, 방향은 무작위인 vel의 초기값
      this.acc = createVector();
    // acc값의 초기화
      this.mass = mass;
    // mass값의 초기화
      this.rad = rad;
    // rad값의 초기화
      this.speedMx = speedMx;
    // speedMx값의 초기화
      this.forceMx = forceMx;
    // forceMx값의 초기화
      this.neighborhooodRad = 50;
    // neighborhoodRad값의 초기화, this.neighborgoodRad = 내 이웃이라고 판단하는 반경의 기준
      this.color = color;
    // color값의 초기화
    }
  
    cohesion(others) {
    // 반경안 친구들의 위치 평균값을 쫓아감
      let cnt = 0;
      //   계산을 할 때 몇 번 계산을 했는지를 알아야 평균을 낼 수 있음
      const steer = createVector(0, 0);
      //   힘들의 평균을 담을 그릇을 벡터로 만들어 줌
      others.forEach((each) => {
        // 모든 others에 대해서 계산하기 위해 forEach를 사용
        if (each !== this) {
          // 나는 계산에서 제외하라 (내가 아닐때만 이 계산을 해라)
          const distSq =
          // 거리 제곱값
            (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
            //this.pos.x에서 each.pos.x를 뺀거 제곱 더하기 this.pos.y에서 each.pos.y를 뺀거 제곱의 값을 distSq에 넣는다.
          if (distSq < this.neighborhooodRad ** 2) {
            // distSq가 this.neighborhoodRad의 제곱보다 작으면 
            steer.add(each.pos);
            // 다른 친구들의 위치값을 더해서 steer에 넣는다.
            cnt++;
            // 몇 번 계산했는지 횟수계산
          }
        }
      });
      if (cnt > 0) {
        // 만약 카운트가 0초과 라면 (아래에서 나누기 할 때 0이면 터지니깐 필요한 부분)
        steer.div(cnt);
        // steer를 카운트로 나눈다. 이렇게 하면 가야하는 위치의 평균치가 나온다.
        steer.sub(this.pos);
        // steer에 나의 위치값을 뺀다.
        steer.setMag(this.speedMx);
        // steer에 나의 speedMx값을 넣는다.
        steer.sub(this.vel);
        // steer에 나의 속도값을 뺀다.
        steer.limit(this.forceMx);
        // steer에게 나의 forceMx보단 커질 수 없도록 limit을 걸어준다.
      }
      return steer;
    }
  
    align(others) {
      // 내 반경안에 들어오면 그 친구들과 속도를 맞춰가고자 하도록 만드는 함수
      let cnt = 0;
      //   계산을 할 때 몇 번 계산을 했는지를 알아야 평균을 낼 수 있음
      const steer = createVector(0, 0);
      //   힘들의 평균을 담을 그릇을 벡터로 만들어 줌
      others.forEach((each) => {
        // 모든 others에 대해서 계산하기 위해 forEach를 사용
        if (each !== this) {
          // 나는 계산에서 제외하라 (내가 아닐때만 이 계산을 해라)
          const distSq =
          // 거리 제곱값
            (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
            //this.pos.x에서 each.pos.x를 뺀거 제곱 더하기 this.pos.y에서 each.pos.y를 뺀거 제곱의 값을 distSq에 넣는다.
          if (distSq < this.neighborhooodRad ** 2) {
            // distSq가 this.neighborhoodRad의 제곱보다 작으면 
            steer.add(each.vel);
            // 다른 친구들의 속도값을 더해서 steer에 넣는다.
            //   steer.add(p5.Vector.normalize(each.vel));
            cnt++;
            // 몇 번 계산했는지 횟수계산
          }
        }
      });
      if (cnt > 0) {
        // 만약 카운트가 0초과 라면 (아래에서 나누기 할 때 0이면 터지니깐 필요한 부분)
        steer.div(cnt);
        // steer를 카운트로 나눈다.
        steer.setMag(this.speedMx);
        // steer에 나의 speedMx값을 넣는다.
        steer.sub(this.vel);
        // steer에 나의 속도 값을 뺀다.
        steer.limit(this.forceMx);
        // steer에게 나의 forceMx보단 커질 수 없도록 limit을 걸어준다.
      }
      return steer;
      //   return을 해야 let align = eachVehicle.align(this.vehicles); 이렇게 사용할 수 있다.
    }
  
    separate(others) {
        // 주어진 객체가 다른 객체들로부터 얼마나 멀리 떨어져 있는지 확인하고, 다른 객체들과 충돌을 피하기 위한 힘을 계산하는 함수, separate를 작성함으로써 이제 객체들이 서로 밀어냄
      let cnt = 0;
    //   계산을 할 때 몇 번 계산을 했는지를 알아야 평균을 낼 수 있음
      const steer = createVector(0, 0);
    //   힘들의 평균을 담을 그릇을 벡터로 만들어 줌
      others.forEach((each) => {
        // 모든 others에 대해서 계산하기 위해 forEach를 사용
        if (each !== this) {
            // 나는 계산에서 제외하라 (내가 아닐때만 이 계산을 해라)
          const dist = this.pos.dist(each.pos);
        //   dist에 다른 친구의 위치 벡터를 넣어준다.
          if (dist > 0 && this.rad + each.rad > dist) {
            // (dist가 0이면 프로그램이 터지므로 0초과 조건) 만약 dist가 영보다 크고, 내 반지름과 다른 친구의 반지름의 합이 dist보다 크다면
            const distNormal = dist / (this.rad + each.rad);
            // 가장 멀었을 때 1이라는 값이 나오고, 완전히 겹쳤을때 0이라는 값이 나온다
            const towardMeVec = p5.Vector.sub(this.pos, each.pos);
            // 나의 위치에서 다른친구의 위치를 빼준다.
            towardMeVec.setMag(1 / distNormal);
            // 거리에 따라 힘의 크기도 다르게 적용하기 위해 1/distNormal을 해준다.
            steer.add(towardMeVec);
            // 계산해서 나온 힘의 크기를 steer에 더해준다.

            cnt++;
            // 몇 번 계산했는지 횟수계산
          }
        }
      });
      if (cnt > 0) {
        // 만약 카운트가 0초과 라면 (아래에서 나누기 할 때 0이면 터지니깐 필요한 부분)
        steer.div(cnt);
        // steer를 카운트로 나눈다
        steer.setMag(this.speedMx);
        // steer에 나의 speedMx값을 넣는다.
        steer.sub(this.vel);
        // steer에 나의 속도 값을 뺀다.
        steer.limit(this.forceMx);
        // steer에게 나의 forceMx보단 커질 수 없도록 limit을 걸어준다.
      }
      return steer;
    //   return을 해야 traffic.js에서 let sepForce = eachVehicle.separate(this.vehicles); 이렇게 사용할 수 있다.
    }
  
    applyForce(force) {
      // 물체에 힘을 가하기 위한 함수
      const forceDivedByMass = p5.Vector.div(force, this.mass);
    // 가속도(forceDivedByMass)를 구하기 위해 force를 this.mass로 나눈다.
      this.acc.add(forceDivedByMass);
    // 계산된 가속도 (forceDeivedByMass)를 현재 객체의 acc에 더한다.
    }
  
    update() {
        // 어떤 객체나 상태를 업데이트하거나 변경하기
      this.vel.add(this.acc);
    //  현재 객체 속도에 현재 객체 가속도 더하기, 가속도에 속도를 더해 물체의 위치 변경
      this.vel.limit(this.speedMx);
    //  속도를 제한한다. 최대 속도는 speedMx값
      this.pos.add(this.vel);
    //   위치에 속도를 더한다.
      this.acc.mult(0);
    //   가속도를 초기화 시킨다.
    }
  
    borderInfinite() {
        // 객체가 InfiniteOffset의 범위를 벗어나면 다시 어디서 나타나야 하는 지를 설정하는 함수
      if (this.pos.x < -infiniteOffset) {
        // 만약에 this.pos.x값이 -infiniteOffset보다 작으면
        this.pos.x = width + infiniteOffset;
        // this.pos.x에 width에 infiniteOffset을 더한 값을 넣는다.
      } else if (this.pos.x > width + infiniteOffset) {
        // 아니면 -> 만약에 this.pos.x가 width + infiniteOffset보다 크다면
        this.pos.x = -infiniteOffset;
        // this.pos.x에 -infiniteOffset을 넣는다.

      }
      if (this.pos.y < -infiniteOffset) {
        // 만약에 this.pos.y값이 -infiniteOffset보다 작으면
        this.pos.y = height + infiniteOffset;
        // this.pos.y에 height 에 infiniteOffset을 더한 값을 넣는다.
      } else if (this.pos.y > height + infiniteOffset) {
        // 아니면 -> 만약에 this.pos.y가 height + infiniteOffset보다 크다면
        this.pos.y = -infiniteOffset;
        // this.pos.y에 -infiniteOffset을 넣는다.
      }
    }
  
    display() {
        // 화면에 어떻게 그려질지를 처리
      push();
    //   좌표계를 이동하고, 회전시켰던 코드의 앞뒤에 push();, pop();을 넣어주면 일일이 되돌려줄 필요없이 초기화 된다.
      translate(this.pos.x, this.pos.y);
    //   좌표계를 this.pos.x, this.pos.y(원의 중심점)로 이동한다.
      rotate(this.vel.heading());
    //   자신의 velocity의 값으로 회전한다.
      noStroke();
    //   선없음
      fill(this.color);
    //   this.color로 채우기
      beginShape();
    //   좌표를 찍어주면 좌표대로 그림을 그려준다.
      vertex(this.rad, 0);
    //   화살표의 뾰족한 곳의 좌표
      vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    //   화살표의 가장 위쪽 좌표
      vertex(0, 0);
    //   화살표의 움푹 들어간 곳 좌표
      vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    //   화살표의 가장 아래쪽 좌표
      endShape(CLOSE);
    //   좌표를 찍어주면 좌표대로 그림을 그려준다. (CLOSE)를 넣어야 시작점과 마지막점도 이어준다.
      // noFill();
      // stroke(0, 0, 60);
      // ellipse(0, 0, 2 * this.rad);
      // stroke(0, 0, 80);
      // ellipse(0, 0, 2 * this.neighborhooodRad);
      pop();
    //   좌표계를 이동하고, 회전시켰던 코드의 앞뒤에 push();, pop();을 넣어주면 일일이 되돌려줄 필요없이 초기화 된다.
    }
  }
  