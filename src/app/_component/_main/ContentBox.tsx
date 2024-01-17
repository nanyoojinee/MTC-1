"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get, post, del } from '@/app/api/index'; 

const ContentBoxWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  text-align: center;
  background-color: #d4d8db;
  height: 70vh;
  overflow-y: auto;
`;

const InputBox = styled.div`
  position: absolute;
  bottom: 0;
  top:900px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 700px;
  gap: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin-right: 10px;
`;

const SunEmoji = styled.span`
  font-size: 24px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 5px;
  font-size: 18px;
  background-color: #d4d8db;
  border: 1px solid #ccc;
  transition: border-color 0.3s;
  outline: none;
  &:focus {
    border-color: #45a049;
  }
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 300px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #dee2e6;
    border: 1px solid #ccc;
    padding: 8px;
    margin: 5px 0;
    border-radius: 4px;

    button {
      background-color: #dd9b93;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #c0392b;
      }
    }
  }
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

interface Item {
  id: number;
  content: string;
}

const ContentBox: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [items, setItems] = useState<Item[]>([]);

  const addItemToUI = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
    setInputValue('');
  };
  const removeItemFromUI = (itemId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = { id: Date.now(), content: inputValue }; 
      addItemToUI(newItem); 
      post<Item>('/api/addItem', { content: inputValue })
        .then((response) => {
          console.log("Post request successful!"); 
          const newItemFromServer = response.data;
          setItems((prevItems) =>
            prevItems.map((item) => (item.id === newItem.id ? newItemFromServer : item))
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

    const handleDeleteItem = (itemId: number) => {
    removeItemFromUI(itemId);
    del<Item>(`/api/deleteItem/${itemId}`)
      .then(() => {
      })
      .catch((error) => {
        console.error(error);
        addItemToUI({ id: itemId, content: '' }); 
      });
  };


  useEffect(() => {
    setItems([
      { id: 1, content: 'Dummy Item 1' },
      { id: 2, content: 'Dummy Item 2' },
    ]);

    fetchData();
  }, []); 
  const fetchData = async () => {
    try {
      const response = await get<Item[]>('/api/data'); 
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddItem();
    }
  };

  return (
    <ContentBoxWrapper>
      <Header>
        <Title>Todo</Title>
        <SunEmoji>☀️</SunEmoji>
      </Header>
      <ItemList>
        {items.map((item) => (
          <li key={item.id}>
            {item.content}
            <button onClick={() => handleDeleteItem(item.id)}>-</button>
          </li>
        ))}
      </ItemList>
      <InputBox>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type something..."
        />
        <AddButton onClick={handleAddItem}>&uarr;</AddButton>
      </InputBox>
    </ContentBoxWrapper>
  );
};

export default ContentBox;
