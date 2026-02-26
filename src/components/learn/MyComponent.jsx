import './style.css'

// {} dùng để code js
const MyComponent = () => {

    // const venn = "eric"; //string
    // const venn = 25; //number
    // const venn = true; //boolean
    // const venn = undefined;
    // const venn = null;
    // const venn = [1 , 2 , 3]; //array
    const venn = {
        name: "Venn" , 
        age : 29
    }; //object
  return (
    // fragment : dùng nhiều div trong return 
    <> 
        <div> {JSON.stringify(venn)} Phan Hữu Phước</div>
        <div className="child"
            style={{borderRadius: "10px"}}
        >Child</div>
    </>
  ) ;
}
export default MyComponent;