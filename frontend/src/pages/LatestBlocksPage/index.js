import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import TopNavigator from '../../components/TopNavigator';
import BottomNavigator from '../../components/BottomNavigator';
import SearchBar from '../../components/SearchBar';
import TableBlocks from './table-blocks';
import * as Actions from '../../actions/actions';
import { AppContext } from '../../contexts/AppContext'; 
import { PUBLIC_KEY } from '../../global/constants';
import { Redirect } from 'react-router-dom';

const LatestBlocksPage = ({ match }) => {
    const classes = useStyles();
    const { isAccessed } = useContext(AppContext);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [listBlocks, setListBlocks] = useState([]);

    useEffect(() => {
        if (match.params.address === "all") {
            Actions.getAllBlocks(1, setPage, setTotalPage, setListBlocks);
        } else {
            Actions.getBlockOfAddress(match.params.address, 1, setPage, setTotalPage, setListBlocks);
        }
    }, []);

    const handlePageChange = (event, value) => {
        if (match.params.address === "all") {
            Actions.getAllBlocks(value, setPage, setTotalPage, setListBlocks);
        } else {
            Actions.getBlockOfAddress(match.params.address, value, setPage, setTotalPage, setListBlocks);
        }
    }

    if (!isAccessed || localStorage.getItem(PUBLIC_KEY) === null) {
        return <Redirect to='/wallet' />
    }

    return (
        <div className={classes.root}>
            <TopNavigator isAccessed={false} />
            <div className={classes.searchField}>
                <SearchBar />
            </div>

            <TableBlocks 
                page={page} 
                totalPage={totalPage} 
                blocks={listBlocks} 
                pageChange={handlePageChange}
            />
            <div style={{ marginBottom: '7%' }} />
            <BottomNavigator />
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    searchField: {
        flexGrow: 1,
        margin: '3%'
    }
});

export default LatestBlocksPage;