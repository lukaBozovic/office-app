import React from 'react';
import {Table, Pagination} from 'antd';
import "./Table.css"
import {BASE_URL, PAGINATION_SIZE} from "../../utils/consts";
import axios from "axios";

const CommonTable = ({columns}) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);

    const fetchData = async (page) => {
        setLoading(true);
        const result = await axios.get(`${BASE_URL}/users?page=${page}&size=${PAGINATION_SIZE}`);
        setData(result.data);
        setTotal(result.data.total);
        setLoading(false);
    }

    React.useEffect(() => {
        fetchData(page);
    }, [page]);

    return (
        <div>
            <Table columns={columns} dataSource={data} loading={loading} pagination={false}/>
            <Pagination
                current={page}
                onChange={setPage}
                total={total}
                className={"pagination"}
            />
        </div>

    );
};

export default CommonTable;