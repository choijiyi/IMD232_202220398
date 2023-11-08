class Traffic {
    // Traffic이라는 객체를 생성
    constructor() {
        // 안에있는 변수들을 초기화해주는 생성자(constructor)를 이용해 실행하고 돌아왔을 때 들어있는 값들을 초기화 해준다.
        this.vehicles = [];
        // 수 많은 vehicle들을 가지고 있어라 (array)
    }

    run() {
        // vehicles 배열에 있는 모든 vehicle에 대해 분리 힘을 계산하고 적용하여 vehicle이 서로 충돌하지 않도록 유지하고, vehicle이 화면에 뜨도록 하는 내용이 담긴 함수
        this.vehicles.forEach(
            // 모든 vehicles에 대해 계산하기 위해 forEach를 사용
            (eachVehicle) => {
                let sepForce = eachVehicle.separate(this.vehicles);
                // eachVehicle을 separate할 때 모든 vehicles들을 가진 채로 separate해라
                eachVehicle.applyForce(sepForce);
                // eachVehicle에게 sepForce만큼의 힘을 가해라
                sepForce.mult(1.5);
                // 너무 가까이 붙지 말라고 넣음
                let align = eachVehicle.align(this.vehicles);
                // eachVehicle을 aligne할 때 모든 vehicles들을 가진 채로 align해라
                eachVehicle.applyForce(align);
                // eachVehicle에게 align만큼의 힘을 가해라
                align.mult(0.5);
                // 너무 일정해지지 말라고 넣음
                let cohesion = eachVehicle.cohesion(this.vehicles);
                // eachVehicle을 cohesion할 때 모든 vehicles들을 가진 채로 cohesion해라
                eachVehicle.applyForce(cohesion);
                // eachVehicle에게 cohesion 만큼의 힘을 가해라
                cohesion.mult(1);
                // 위처럼 cohesion도 값을 줌
                eachVehicle.update();
                // eachVehicle을 update해줘라
                eachVehicle.borderInfinite();
                // eachVehicle이 infiniteOffset을 벗어나면 설정된 좌표로 다시 나타나게 해줘라
                eachVehicle.display();
                // eachVehicle을 화면에 보이게 해라
            }
        );
    }

    addVehicle(x, y) {
        // 추가될 vehicle들의 정보를 담은 함수
        const mass = floor (random(1,3));
        // mass를 1~2사이의 랜덤값으로 정한다.
        this.vehicles.push(new Vehicle( x,
            y,
            mass,
            mass*12,
            5,
            0.1,
            color(random(360), 100, 50)
        // vehicle들에 들어가는 x,y,mass,rad,speedMx,forceMx,color의 값
        ));
    }
}