function returnVoid(message: string): void { // 명시적으로 아무 값도 반환하지 않겠다.
  console.log(message)

  return undefined;  // 유일하게 void에 할당할 수 있는 값
}

const r = returnVoid("리턴이 없다. ")  // 변수로 지정할 수 없고 그냥 없는 값이다.