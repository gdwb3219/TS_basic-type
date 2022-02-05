function returnAny(messege: any): any {  // 불가 에러는 아니지만,
  //  any 라는 타입을 지정해주는 게 좋음, 리턴이 any 이기 때문에,
  //  Parameter 또한 any 타입이 올 수도 있다고 TS에서 알려줌
  console.log(messege)
}

const any1 = returnAny("리턴은 아무거나")

any1.toString()



// LooselyType

let looselyTyped: any = {}

const d = looselyTyped.a.b.c.d // 어떤 식으로 해도 any Type으로 전파 됨

function leakingAny(obj: any) {
  const a: number = obj.num   // any Type의 para로 이어지기 때문에, 모든 값이 any로 전파
  const b = a + 1     // 따라서 Leaking을 막기 위해 중간에 타입 설정을 해줌으로써 any 전파 차단
  return b
}

const c = leakingAny({num: 0})
// c.indexOf('0')  // leaking 막는 순간 indexOf 메소드는 에러 발생 (number 타입에서는 없는 메소드)