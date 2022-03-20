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
        <div className="counter-left" onClick={() => updatePage(-1)}>
            (
        </div>

        {page + 1}/ {pageCount + 1}

        <div className="counter-right" onClick={() => updatePage(1)}>
            )
        </div>
    </div>

}

export default PageCounter;