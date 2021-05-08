import React from 'react';
import { Author } from './Author';
import { authorsApi } from '../rest/AuthorsApi.js';

export class AuthorsList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchAuthors();
    };

    fetchAuthors = async () => {
        const houses = await authorsApi.get();
        this.setState({ houses });
    };

    updateAuthor = async (updatedAuthor) => {
        console.log('we got inside updateAuthor');
        await authorsApi.put(updatedAuthor);
        this.fetchAuthors();
    };

    render() {
        return (
            <div className="house-list">
                {this.state.houses.map((house) => (
                    <Author
                        house={house}
                        key={house._id}
                        updateAuthor={this.updateAuthor}
                    />
                ))}
            </div>
        )
    }

}