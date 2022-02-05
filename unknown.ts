declare const maybe: unknown

// const aNumber: number = maybe  // unknown 으로 타이핑 된 maybe 라는 변수는 number로 설정할 수 없다.

if (maybe === true) {  // unknown인 maybe가 런타임 시에 true로 할당이 되면,
  // const aString: string =  maybe  // maybe는 string으로 할당될 때에는 이 Loop로 들어오지 못하므로, 여기서는 에러 발생
  
  const aBoolean: Boolean = maybe  // maybe = true (Boolean) 할당 되었기 때문에, 해당 aBoolean 변수는 정상
}

if (typeof maybe === 'string') {  // 위와 반대로, unknown 타입인 maybe가 string으로 타입 설정이 되면,
  const aString: string = maybe

  // const aBoolean: Boolean = maybe  // 위와 반대로 string 할당된 타입을 제외하고, 다른 타입은 해당 루프 안에서 에러가 발생
}

