import React, { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Form from "./components/form/Form";
import { Route, Routes } from "react-router-dom";
import UserCard from "./components/userCard/UserCard";
import { useDispatch, useSelector } from 'react-redux';
import { resetForm, selectUserPhoto, setUserPhoto } from './store/slices/formSlice'; // Добавлен импорт setUserPhoto

function App() {
  const dispatch = useDispatch();
  const userPhoto = useSelector(selectUserPhoto);
  const { tg } = useTelegram();

  useEffect(() => {
    if (tg && tg.ready) {
      tg.ready();
    }
    return () => {
      dispatch(resetForm());
    };
  }, [tg, dispatch]);

  useEffect(() => {
    // Здесь мы проверяем, получили ли мы фотографию от пользователя
    // и сохраняем ее в Redux
    if (tg && tg.photoUrl) {
      dispatch(setUserPhoto(tg.photoUrl));
    }
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
