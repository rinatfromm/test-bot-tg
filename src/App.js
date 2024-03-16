import React, { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Form from "./components/form/Form";
import { Route, Routes } from "react-router-dom";
import UserCard from "./components/userCard/UserCard";
import { useDispatch } from 'react-redux';
import { resetForm } from './store/slices/formSlice';

function App() {
  const dispatch = useDispatch();
  const { tg } = useTelegram();

  useEffect(() => {
    if (tg && tg.ready) {
      tg.ready();
    }
    return () => {
      dispatch(resetForm());
    };
  }, [tg, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Form />} />
        <Route path={"card"} element={<UserCard />} />
      </Routes>
    </div>
  );
}

export default App;
