import React from 'react'
import styles from './search.module.css'
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from 'react-icons/io5';

const Search = ({ setSearch }) => {
    return (
        <div className={styles.search}>
            <form className={styles.form}>
                <div className={styles.input__container}>
                    <CiSearch size={24} />
                    <input type="text" placeholder='SEARCH OUR STORE' />
                </div>
                <button type='button' onClick={() => setSearch(false)}>
                    <IoCloseOutline size={28} />
                </button>
            </form>
        </div>
    )
}

export default Search;