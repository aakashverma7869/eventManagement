import React, { useState } from "react";

import styled from "styled-components";
import dayjs from "dayjs";

import Label from "components/designSystem/Label";
import Input from "components/designSystem/Input";
import Button from "components/designSystem/Button";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-grow: 4;
  flex-basis: 50%;
`;
const NameBlock1 = styled.div`
  display: flex;
  width:100%
  flex-direction: row;
  text-align: center;
  flex-grow: 8;
 
  
`;

const DueDateBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-basis: 30%;
  padding-left: 5px;
  @media (max-width: 356px) {
    flex-basis: 100%;
    width: 100%;
    padding-left: 0;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 100%;
`;

// const Screen = () => {

//   const [count, setCount] = useState([]);


//   const countHandler = (e) => {
//       e.preventDefault();
//       setCount([...count, { key:count.length }]);
//   }



const Form = ({ add }) => {
  const [label, setlabel] = useState("");
  const [label1, setlabel1] = useState("");
  const [label2, setlabel2] = useState("");
  const [label3, setlabel3] = useState("");

  const [label4, setlabel4] = useState("");
  const [label5, setlabel5] = useState("");



  //const [label3, setlabel3] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [dueDate1, setdueDate1] = useState("");


  const handleAddTodo = () => {
    add(label, dueDate);
    setlabel("");
    setlabel1("");
    setlabel2("");
    setlabel3("");
    setlabel4("");
    setlabel5("");

    setdueDate("");
    setdueDate1("");
  };

  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  
  
  return (

    <Container>
      
      <NameBlock>
        <Label>Event Name</Label>
        <Input
          type="text"
          name="label"
          value={label}
          onChange={(e) => setlabel(e.target.value)}
        />
      </NameBlock>
      <NameBlock>
        <Label>Event Oragnizer</Label>
        <Input
          type="text"
          name="label1"
          value={label1}
          onChange={(e) => setlabel1(e.target.value)}
        />
      </NameBlock>
      <DueDateBlock>
        <Label>start Date</Label>
        <Input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={(e) => setdueDate(e.target.value)}
          min={dayjs().format("YYYY-MM-DD")}
        />
      </DueDateBlock>
      <DueDateBlock>
        <Label>End Date</Label>
        <Input
          type="date"
          name="dueDate"
          value={dueDate1}
          onChange={(e) => setdueDate1(e.target.value)}
          min={dayjs().format("YYYY-MM-DD")}
        />
      </DueDateBlock>
      <NameBlock>
        <Label>Event Description</Label>
        <Input
          type="text"
          name="label"
          value={label2}
          onChange={(e) => setlabel2(e.target.value)}
        />
      </NameBlock>
      <ButtonBlock>

       <div className="App">
      <h3>Add ticket</h3>
      {inputList.map((x, i) => {
        return (
          <div className="box">
                  <NameBlock1>
        <Label>ID</Label>
        <Input
          type="text"
          name="label"
          value={label3}
          onChange={(e) => setlabel3(e.target.value)}
        />
           <Label>Ticket no.</Label>
        <Input
          type="text"
          name="label"
          value={label4}
          onChange={(e) => setlabel4(e.target.value)}
        />
           <Label>price</Label>
        <Input
          type="text"
          name="label"
          value={label5}
          onChange={(e) => setlabel5(e.target.value)}
        />
      </NameBlock1>



            {/* <input
              name="firstName"
              placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="lastName"
              placeholder="Enter Last Name"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            /> */}
            <div className="btn-box">
              {inputList.length !== 1 && <Button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</Button>}
                
              {inputList.length - 1 === i &&   <Button onClick={handleAddClick}>Add tickets   </Button>}
            </div>
          </div>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>









       {/* <h1>checking</h1>
        <button onClick={countHandler} >create new event</button>
        { count.map(each=>{
            return <div key={each.key} >
                <form>
                    <input type='text' placeholder={`form number ${count.length} `} />
                </form>
            </div>
        })  } */}


       </ButtonBlock>



      <ButtonBlock>
  
        <Button
          fullWidth
          disabled={label === "" || dueDate === ""}
          onClick={handleAddTodo}
        >
          saved
        </Button>
      </ButtonBlock>
    </Container>
  );
};

export default Form;
