# React Hooks

- [x] useInput
- [x] useTabs
- [x] useTitle
- [x] useClick
- [x] usePreventLeave
- [x] useConfirm
- [x] useBeforeLeave
- [x] useFullscreen
- [x] useNetwork
- [x] useNotification
- [x] useScroll

### useEffect

useEffect : ComponentDidMount + ComponentDidUpdate

- 마운트될 때만 실행하고 싶을 때

```
    useEffect(()=>{
        console.log('마운트될 때만');
    }, [];)
```

- 특정 값이 업데이트될 때만 실행 - [특정 값]

```
    useEffect(()=>{
        console.log(name)
    },[name]);
```

- addEventListner를 사용했다면 removeEventListner로 마무리

### useRef

- 특정 DOM을 선택해야 할 때
- 컴포넌트 안에서 조회 및 수정 할 수 있는 변수 관리 ( useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다.)
