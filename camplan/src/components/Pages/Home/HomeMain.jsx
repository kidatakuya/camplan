import { VideoWarp } from '../../index';
import './HomeMain.scss'
import { useEffect, useRef, useContext } from 'react';

const HomeMain = () => {
    const elm = useRef(null);
    let count = 0
    // const SampleComponent = useRefSample;
    const test = (elm, count) => {
        let scrollCount = count;
        const homeMainHeight = elm.current.getBoundingClientRect().height
        let homeMainScrollAmount = elm.current.scrollTop
        let scrollCheck = count * homeMainHeight;
        let ScrollAmount = count * homeMainHeight + elm.current.scrollTop//現在表示しているコンポーネントの座標
        if(ScrollAmount > scrollCheck){
            // 下にスクロールした時
            scrollCount ++
            let componentScroll = scrollCount * homeMainHeight;
            homeMainScrollAmount = `${componentScroll}px`;
            console.log(componentScroll)
        }else if(ScrollAmount < scrollCheck){
            // 上にスクロールした時
            scrollCount = scrollCount - 1;
            let componentScroll = scrollCount * homeMainHeight;
            homeMainScrollAmount = `${componentScroll}px`;
            console.log(componentScroll)
        }

        
    }
    useEffect(() =>{

        
        
    },[])

    return(
        <main className="homeMain" ref={elm} onScroll={()=>{test(elm, count)}}>
            <VideoWarp />
            <VideoWarp />
            <VideoWarp />
            <VideoWarp />
        </main>
    )
}


export default HomeMain;

