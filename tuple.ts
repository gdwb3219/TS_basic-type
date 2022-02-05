let x: [string, number]  // Tuple Type 설정 --> Typing

x = ["age", 39]  // 제대로 된 데이터 할당

// x = [39, "age"]  // 타입대로 할당하지 않아 오류 발생

// x[2]; // 길이도 매칭을 해야함. 3번째 요소는 없기 때문에 에러 발생

const person: [string, number] = ["Mark", 39]

const [first, second] = person  // 분해 할당 --> person의 요소를 first, second에 각각 분해해서 할당함

// const [first1, second2, third] = person  // 분해 할당 역시 길이 만큼 할당 해야하는데, 없는 3번째 요소를 할당하니 에러 발생