import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

let PageCounter = (props) => {

    let [page, setPage] = props.page;
    let pageCount = props.total;

    let updatePage = (e) => {

        console.log("ran");
        if (page == 0 && e == -1) {
            return;
        }

        setPage(page + e);

    }

    return <div className="page-counter">
        <div className="counter-left btn    " onClick={() => updatePage(-1)}>
            {/* <AiOutlineArrowLeft></AiOutlineArrowLeft> */}
            <FaArrowLeft></FaArrowLeft>
        </div>

        <div className="counter">
            {page + 1}/ {pageCount + 1}
        </div>

        <div className="counter-right btn" onClick={() => updatePage(1)}>
            {/* <AiOutlineArrowRight></AiOutlineArrowRight> */}
            <FaArrowRight></FaArrowRight>
        </div>
    </div>

}

export default PageCounter;