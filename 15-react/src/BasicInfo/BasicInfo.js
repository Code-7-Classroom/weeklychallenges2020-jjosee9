import React from 'react';

class BasicInfo extends Component{
  render(){
    return (
    <ul>
       {this.props.person.map(info => (
           <div className="person">
               <li>Name: {info.name}</li>
               <li>Phone: {info.Phone}</li>
               <li>DOB: {info.DOB}</li>
           </div>
       ))}
    </ul>
    )
  }
};

export default BasicInfo;