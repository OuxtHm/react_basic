import {useState, useEffect} from "react";
import axios from "axios";

// VO
interface Food {
    fno: number;
    name: string;
    poster: string;

}

interface FoodListProps {
    list: Food[];
    curpage: number;
    totalpage: number;
    startPage: number;
    endPage: number;
}

function FoodList() {
    const [curpage, setCurpage] = useState<number>(1);
    const [data, setData] = useState<FoodListProps>();
    useEffect(() => {
        axios.get(`http://localhost/food/list_react/${curpage}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
    }, [curpage]);

    const prev =():void => {
        if(data)
            setCurpage(data.startPage-1)
    }
    const next=():void => {
        if(data)
            setCurpage(data.endPage + 1)
    }
    const pageChange=(page:number):void=>{
        if(data)
            setCurpage(page);
    }
    const pageArr = []
    if(data && data?.startPage > 1)
    {
        pageArr.push(
            <li><a className={"nav-link"} onClick={prev}>&laquo;</a></li>
        )
    }

    if(data)
    {
        for(let i:number = data.startPage; i <= data.endPage; i++)
        {
            pageArr.push(
                <li><a className={"nav-link"} onClick={()=>pageChange(i)}>{i}</a></li>
            )
        }
    }

    if(data && data?.endPage < data?.totalpage)
    {
        pageArr.push(
            <li><a className={"nav-link"} onClick={next}>&raquo;</a></li>
        )
    }

    const html: any = data?.list.map((food: Food) =>
        <div className="col-md-4">
            <div className="thumbnail">
                <a href="#">
                    <img src={food.poster} style={{"width": "240px", "height": "150px"}}/>
                    <div className="caption">
                        <p>{food.name}</p>
                    </div>
                </a>
            </div>
        </div>
    )
    return (
        <div className={"container"}>
            <div className="row">
                {html}
            </div>
            <div className="row text-center" style={{"height":"20px"}}>
                <ul className={"pagination"}>
                    {pageArr}
                </ul>
            </div>
        </div>
    )
}

export default FoodList;