import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd';
import CustomForm from '../components/Form';


const ArticleDetail = (props) => {

    const [article, setArticle] = React.useState({title: '', content: ''});

    const articleID = props.match.params.articleID;

    const handleDelete = (event) => {
        axios.delete(`http://127.0.0.1:8000/api/${articleID}/`)
        props.history.push('/');
    };

    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                setArticle(res.data)
            });

    }, [articleID]);

    return(
        <div>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <br />
            <CustomForm
                requestType="put"
                articleID={props.match.params.articleID}
                btnText="Update"
            />
            <form onSubmit={handleDelete}>
                <Button type="danger" htmlType="submit">Delete</Button>
            </form>


        </div>
    );
};

export default ArticleDetail;