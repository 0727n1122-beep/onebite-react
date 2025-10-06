import {useEffect} from "react";

const Even = () => {
    useEffect ( () => {
        //클린업, 정리함수 (언마운트 시점에 실행)
        return () => {
            console.log("Even unmount");
        };
    }, []);
    return <div>짝수입니다</div>
};

export default Even;
