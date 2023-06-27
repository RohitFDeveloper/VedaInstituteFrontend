/* eslint-disable react/prop-types */
const style = {
    borderRadius: '6px',
    margin: '0 1rem',
    whiteSpace: 'nowrap',
    height: '38px',
    padding: '10px 20px',
    border: '0.5px solid #19875452',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
        backgroundColor: '#198754',
        color: '#ffffff'
    }
};
const Tag = ({ data }) => {
    return (
        <li className="lialag" style={style}>
            {data}
        </li>
    );
};

export default Tag;
