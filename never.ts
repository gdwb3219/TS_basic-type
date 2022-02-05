function error(messege: string): never {  // throw 메소드를 생성하게 되면 그 아래로는 실행하지 않고 함수가 끝난다.
  throw new Error(messege)  // 따라서 아무것도 반환되지 않는다. --> never 타입
}

function fail() {  // 위에서 실행되는 함수가 return으로 에러 함수 발생 --> 똑같이 never 타입
  return error("Failed")
}

function infiniteLoop(): never {  // 무한 루프이기 때문에, 아무것도 반환하지 않는다?
  while(true) { }
}



let a: string = "Hello"

if (typeof a !== "string") {
  a;
}