import { useState, useEffect, Fragment } from "react";

function App3() {
    const [img, setImg] = useState<string[]>([]);

    const images: string[] = [
        'https://img.megabox.co.kr/SharedImg/2026/01/15/xlMKoNV9stZD0rpyynZmnvRS2zDbQtyp_420.jpg',
        'https://img.megabox.co.kr/SharedImg/2025/11/26/6tAiMzbHCFRIda2pnPZxeJh7lzX2AaIB_420.jpg',
        'https://img.megabox.co.kr/SharedImg/2026/01/16/QUGtsQ9CVj2p48W7XxSAHJSycF4Xxbuv_420.jpg',
        'https://img.megabox.co.kr/SharedImg/2026/01/15/CV8G7PcHhzzdmaqHtsgHZBpMIdIgfLth_420.jpg',
        'https://img.megabox.co.kr/SharedImg/2026/01/22/lusrguKzQRdoxZeuKowjyE1HWp5EIh6d_420.jpg',
        'https://img.megabox.co.kr/SharedImg/2026/01/23/OgyrsXChaR9fsEaAdJsGjRC2746e8y7s_420.jpg'
    ];

    useEffect(() => {
        setImg(images);
    }, []);

    const html = img?.map((movie: string) => (
        <img
            src={movie}
            style={{ width: "150px", height: "200px"}}
            key={movie}
        />
    ));

    // 3. 최종적으로 UI를 화면에 렌더링하기 위해 return문을 추가합니다.
    return (
        <div>
            {html}
        </div>
    );
}

export default App3;