import React from 'react';
import { Author } from './Author';
import { authorsApi } from '../rest/AuthorsApi.js';

export class AuthorsList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await authorsApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        console.log('we got inside updateHouse');
        await authorsApi.put(updatedHouse);
        this.fetchHouses();
    };

    render() {
        return (
            <div className="house-list">
                {this.state.houses.map((house) => (
                    <Author
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        )
    }

}