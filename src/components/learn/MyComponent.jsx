import './style.css'

const MyComponent = () => {
  return (
    // fragment : dùng nhiều div trong return 
    <> 
        <div >Phan Hữu Phước</div>
        <div className="child"
            style={{borderRadius: "10px"}}
        >Child</div>
    </>
  ) ;
}
export default MyComponent;