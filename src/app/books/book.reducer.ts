import { State, createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBookSuccess, AddBookFailure } from "./book.actions";
import { Book } from "../model/book";
import { state } from "@angular/animations";

export const initialState: Book[] = [];

export const BookReducer = createReducer (
    initialState, 
    on(AddBook, (state) => {return state}),
    on(AddBookSuccess, (state, {id, title, author}) => [...state, {id, title, author}]),
    on(AddBookFailure,(state, {error}) => {
        console.error(error);
        return state;
    }),

    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !==bookId))
);
    

