let apples = []; // 사과들을 담을 배열
let draggingApple = null; // 드래그 중인 사과
let initialPosition = null; // 드래그 중인 사과의 초기 위치
let score = 0; // 스코어 변수
let startTime; // 시작 시간 변수
let timerEnded = false; // 타이머 종료 여부 변수
let gameEnded = false; // 게임 종료 여부 변수

function setup() {
  createCanvas(600, 400); // 추가 캔버스 생성
  
  startTime = millis(); // 시작 시간 저장

  // 사과 생성
  let appleSize = 40; // 사과 크기 설정
  let cols = width / appleSize; // 열 개수
  let rows = height / appleSize; // 행 개수
  
  // 캔버스 상단 한 줄의 사과를 생성하지 않고 생성하는 부분 수정
  for (let col = 0; col < cols; col++) {
    for (let row = 1; row < rows; row++) { // row를 1부터 시작하여 상단 한 줄을 제외
      let x = col * appleSize + appleSize / 2; // x 좌표 계산
      let y = row * appleSize + appleSize / 2; // y 좌표 계산
      let number = floor(random(1, 10)); // 사과에 적힐 숫자를 랜덤으로 설정

      let apple = {
        x: x,
        y: y,
        size: appleSize,
        number: number,
        initialX: x, // x 좌표 저장
        initialY: y // 초기 y 좌표 저장
      };

      apples.push(apple); // 사과 배열에 추가
    }
  }
}

function draw() {
  background(220); // 프레임 배경 설정
  
  if (!gameEnded) {
    // 사과 그리기
    for (let i = 0; i < apples.length; i++) {
      let apple = apples[i];

      fill(255, 0, 0); // 사과 색상 설정 (빨간색)
      ellipse(apple.x, apple.y, apple.size, apple.size); // 원 모양의 사과 그리기

      // 숫자 그리기
      fill(255); // 숫자 색상 설정 (흰색)
      textSize(20); // 숫자 크기 설정
      textAlign(CENTER, CENTER); // 숫자 정렬 설정 (가운데 정렬)
      text(apple.number, apple.x, apple.y); // 숫자를 사과 중앙에 그리기
    }
  
    // 스코어 표시
    fill(0); // 텍스트 색상 (검정색)
    textSize(24); // 텍스트 크기
    textAlign(RIGHT, TOP); // 텍스트 정렬 (우측 상단)
    text("Score: " + score, width - 10, 10); // 스코어 텍스트를 우측 상단에 표시
  
    // 타이머 표시
    fill(0); // 텍스트 색상 (검정색)
    textSize(18); // 텍스트 크기
    textAlign(LEFT, TOP); // 텍스트 정렬 (좌측 상단)
    let elapsedTime = millis() - startTime; // 경과 시간 계산 (밀리초 단위)
    let remainingTime = Math.max(30 - Math.floor(elapsedTime / 1000), 0); // 남은 시간 계산 (초 단위)
    text("Time: " + remainingTime + "s", 10, 10); // 타이머 텍스트를 좌측 상단에 표시
  
    // 타이머 종료 시 드래그 중인 사과를 초기 위치로 복원
    if (remainingTime === 0 && !timerEnded) {
      if (draggingApple) {
        draggingApple.x = draggingApple.initialX; // 초기 x 좌표로 복원
        draggingApple.y = draggingApple.initialY; // 초기 y 좌표로 복원
        draggingApple = null;
        initialPosition = null;
      }
      timerEnded = true;
      gameEnded = true; // 게임 종료 플래그 설정
    }
  } else {
    // 게임 종료 화면 표시
    background(0); // 배경을 검정색으로 설정

    fill(255); // 텍스트 색상 (흰색)
    textSize(24); // 텍스트 크기
    textAlign(CENTER, CENTER); // 텍스트 정렬 (가운데 정렬)
    text("Game Over", width/2, height/2); // "Game Over" 텍스트를 화면 가운데에 표시
    text("Score: " + score, width/2, height/2 + 40); // 스코어 텍스트를 화면 가운데에 표시
  }
}

function mousePressed() {
  if (!timerEnded && !gameEnded) {
    // 마우스를 클릭한 위치에 사과가 있는지 확인
    for (let i = 0; i < apples.length; i++) {
      let apple = apples[i];
      let d = dist(mouseX, mouseY, apple.x, apple.y);

      if (d < apple.size / 2) {
        draggingApple = apple; // 드래그 중인 사과로 설정
        initialPosition = { x: apple.x, y: apple.y }; // 초기 위치 저장
        break; // 첫 번째로 발견된 사과만 드래그
      }
    }
  }
}

function mouseDragged() {
  if (draggingApple) {
    draggingApple.x = mouseX;
    draggingApple.y = mouseY;
  }
}

function mouseReleased() {
  // 드래그가 끝난 후 드래그된 사과의 합 계산 및 사과 제거 또는 초기 위치로 복원
  if (draggingApple) {
    let total = 0;
    let restorePosition = true; // 초기 위치로 복원하기 위한 플래그

    for (let i = 0; i < apples.length; i++) {
      let apple = apples[i];
      if (apple !== draggingApple && dist(apple.x, apple.y, draggingApple.x, draggingApple.y) <= apple.size / 2) {
        total += apple.number;
        apples.splice(i, 1);
        i--;
        restorePosition = false; // 다른 사과와 합쳤으므로 초기 위치로 복원하지 않음
      }
    }

    if (total + draggingApple.number == 10) {
      apples.splice(apples.indexOf(draggingApple), 1);
      score += 1;
    } else {
      draggingApple.number = total + draggingApple.number; // 합친 숫자를 사과에 적용
    }

    if (restorePosition) {
      draggingApple.x = draggingApple.initialX; // 초기 x 좌표로 복원
      draggingApple.y = draggingApple.initialY; // 초기 y 좌표로 복원
    }

    draggingApple = null;
    initialPosition = null;
  }
}