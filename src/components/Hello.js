import React, { useState } from 'react'

const Hello = () => {

    // 일반 변수는 상태값 관리가 안됨
    // let nickName = '익명';
    const [nickName, setNickName] = useState('익명');

 
    // 여기에 쓴 코드는 태그가 렌더링 되기 전에 실행
//   const $btn = document.querySelector('.btn');
//   $btn.onclick = e => {
//     alert('박사님 안녕~~');
//   };
    

    const sayHello = e => {
        // alert('박사님 안녕')
        
        // 상태 변수 값을 변경할 때는 직접 대입하면 안되고, 상태 변경 함수를 이용해야 함.
        // nickName = '척척박사' (X)
        setNickName('척척박사');

    };

    console.log('Hello nickName : ' + nickName);

  return (
    <>
        <h1>Hello ~~~ {nickName}</h1>
        <button class="btn" onClick = {sayHello}>척척박사</button>
        <button class="btn" onClick = {() => {setNickName('척척석사')}}>척척석사</button>
    </>
  )
}

export default Hello