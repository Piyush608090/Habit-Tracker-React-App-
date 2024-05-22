import {createSlice} from "@reduxjs/toolkit"

let id = 0;
const initialState = {habits:[]}
 const habitSlice = createSlice({
    name:"habits",
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
        const today = new Date()
        let day=today.getDate()-today.getDay();
        const month= today.getMonth();
        const year =today.getFullYear();
        const habit = {
            id:id++,
            name:action.payload,
            weekLog:[
                {
                    id: 0,
                    day: "Sunday",
                    dd:day,
                    mm:month,
                    yyyy:year,
                    isDone: "",
                  },
                  {
                    id: 1,
                    day: "Monday",
                    dd:day+1,
                    mm:month,
                    yyyy:year,
                    isDone: "",
                  },
                  {
                    id: 2,
                    day: "Tuesday",
                    dd:day+2,
                    mm:month,
                    yyyy:year,
                    isDone: "",
                  },
                  {
                    id: 3,
                    day: "Wednesday",
                    dd:day+3,
                    mm:month,
                    yyyy:year,
                    isDone: "",
                  },
                  {
                    id: 4,
                    day: "Thursday",
                    dd:day+4,
                    mm:month,
                    yyyy:year,
                    isDone: "",
                  },
                  {
                    id: 5,
                    day: "Friday",
                    dd:day+5,
                    mm:month,
                    yyyy:year,
                    isDone: "",
                  },
                  {
                    id: 6,
                    day: "Saturday",
                    dd:day+6,
                    mm:month,
                    yyyy:year,
                    isDone: "",
                  },
                ],
              };
             state.habits.push(habit)
        },
        delete:(state,action)=>{
          state.habits.splice(action.payload,1) 
           },
        habitDone: (state, action) => {
          for (let i = 0; i < state.habits.length; i++) {
            if (state.habits[i].id === Number(localStorage.getItem("id"))) {
              state.habits[i].weekLog[action.payload].isDone=true;
            }
          }
          },
          habitUnDone: (state, action) => {
            for (let i = 0; i < state.habits.length; i++) {
              if (state.habits[i].id === Number(localStorage.getItem("id"))) {
                state.habits[i].weekLog[action.payload].isDone=false;
              }
            }
          },
          habitNone: (state, action) => {
           
            for (let i = 0; i < state.habits.length; i++) {
              if (state.habits[i].id === Number(localStorage.getItem("id"))) {
                state.habits[i].weekLog[action.payload].isDone="";
              }
            }
        },
      }});
      export const actions = habitSlice.actions
      export const habitReducer = habitSlice.reducer
      export const habitSelector = (state) =>state.habitReducer.habits 
      
