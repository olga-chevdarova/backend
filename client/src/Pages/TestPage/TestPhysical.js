import React, {Component} from 'react';
import List_Tasks from "../../Components/Lists/Tasks/List_tasks";

class TestPhysical extends Component {
    render() {
        return (
            <div>
                <h3>Отметьте пункты, которые соответсвуют действительности</h3>
                <List_Tasks url="/test_physical"/>
            </div>

        );
    }
}

export default TestPhysical;