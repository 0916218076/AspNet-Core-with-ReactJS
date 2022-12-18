import React,{Component} from 'react';

export class Employee extends Component{
    static displayName = Employee.name;
    render(){
        return(
            <div>
                <h3>This is Employee page</h3>
            </div>
        )
    }
}