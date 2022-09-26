import "./style/styles.css";
export default function Test1(){
    return<>
    
    <div className="box">
        <label>Heading1</label>
        <label>Heading2</label>
    </div>
    <Sample text="Sample1" number="20"/>
    <Sample text="Sample2" number="30"/>
    <Sample text="Sample3" number="40"/>
    </>
}

function Sample({text,number})
{
    return<>
    
    <div className="Row">
    <label>{text}</label>
    <label>{number}</label>
 </div>
 </>
 
}