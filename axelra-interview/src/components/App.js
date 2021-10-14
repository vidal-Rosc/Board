import React from "react";
import styled from "styled-components";
import TaskList from "./TaskList";
import { connect } from "react-redux";
import app from "../app.css";
import AddButtonOrForm from "./Buttons/AddButtonOrForm";



const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 6px;
  margin-right: 6px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
`;

function App({list}) {

  return (
    <div className="app">
        <Container>
          {list.map(lista =>(<TaskList key={lista.id} 
          title={lista.title} cards={lista.cards} listID={list.id} />))}
          <AddButtonOrForm list />
        </Container>
        
    </div>
  );
}

const mapStateToProps = state => ({
  list:  state.list
});


export default connect(mapStateToProps)(App);
