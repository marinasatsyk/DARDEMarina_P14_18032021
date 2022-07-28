import PropTypes from 'prop-types';
/*function ShowPage is  for show the pagination on mode 
1 2 3 4 5 ... 100
1...4 5 6 ... 100
1... 96 97 98 99 100*/

export const ShowPage = ({ pageIndex, pageCount, isActive, gotoPage }) => {
    const page = pageIndex + 1;
    const count = [];
    let ar = [];
    for (let i = 1; i <= pageCount; i++) {
        count.push(i);
    }

    if (pageCount <= 6) {
        ar = [];
        //1,2,3,4,5,6
        console.log('1,2,3,4,5,6');
        for (let i = 1; i <= pageCount; i++) {
            ar.push(i);
        }
        console.log(ar);
    } else if (pageCount > 6 && page < 5) {
        ar = [];
        //1,2,3,4,5...100
        console.log('1,2,3,4,5...100');
        ar.push(1, 2, 3, 4, 5, '...', count[count.length - 1]);
        console.log(ar);
    } else if (pageCount > 6 && page >= 5 && page < count[count.length - 4]) {
        ar = [];
        //1...4,5,6...100
        console.log('1...4,5,6...100');
        ar.push(
            count[0],
            '...',
            page - 1,
            page,
            page + 1,
            '...',
            count[count.length - 1]
        );
        console.log(ar);
    } else if (pageCount > 6 && page >= count[count.length - 4]) {
        ar = [];
        //1... 96,97,98,99,100
        console.log('1... 96,97,98,99,100');
        ar.push(
            count[0],
            '...',
            count[count.length - 5],
            count[count.length - 4],
            count[count.length - 3],
            count[count.length - 2],
            count[count.length - 1]
        );
        console.log(ar);
    }

    return (
        <>
            {ar.map((item, index) => (
                <div
                    key={`${item}-${index}`}
                    className={
                        isActive(item) ? 'active numbOfPage' : 'numbOfPage'
                    }
                    onClick={() => gotoPage(item - 1)}
                >
                    {item}
                </div>
            ))}
        </>
    );
};

ShowPage.propTypes = {
    pageIndex: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    isActive: PropTypes.any.isRequired,
    gotoPage: PropTypes.func.isRequired,
};
