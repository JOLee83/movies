import React, { Component } from 'react'
import Data from './Data'
import styled from 'styled-components'

const Header = styled.header`
	display: flex;
	justify-content: center;
	text-align: center;
	\margin: 0.5rem;
	h1 {
		color: aqua;
		text-shadow: 0.1rem 0.1rem 0 rgb(233, 25, 164);
		background-color: rgb(0, 255, 0);
		border: 0.4rem solid rgb(248, 0, 186);
		border-radius: 5px;
		font-family: 'Press Start 2P', cursive;
		padding: 1rem;
	}
`
const Movie = styled.section`
	width: 500px;
	margin: 1rem;
	padding: 1rem;
	text-align: center;
	color: aqua;
	text-shadow: 0.1rem 0.1rem 0 rgb(233, 25, 164);
	background-color: rgb(0, 255, 0);
	border: 0.4rem solid rgb(248, 0, 186);
	border-radius: 5px;
	aside {
		display: flex;
		justify-content: center;
	}
	p {
		padding: 1rem;
		margin-left: 1rem;
    text-align: left;
    font-family: 'VT323', monospace;
    font-size: 1.3rem;
	}
	img {
		border-radius: 5px;
		padding: 0.4rem;
		background-color: rgb(248, 0, 186);
	}
	h2, h3 {
    font-family: 'Press Start 2P', cursive;
    font
  }
  @media (max-width: 500px) {
    aside {
      flex-direction: column;
    }
  }
`

class Movies extends Component {
	render() {
		return (
			<>
				<Header>
					<h1>1989 MOVIES</h1>
				</Header>
				<main>
					{Data.results.map(result => {
						return (
							<Movie key={result.title}>
								<h2>{result.title}</h2>
								{/* <h3>{result.release_date}</h3> */}
								<aside>
									<span>
										<img
											alt={result.title}
											src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
												result.poster_path
											}`}
										/>
									</span>
									<p>{result.overview}</p>
								</aside>
							</Movie>
						)
					})}
				</main>
			</>
		)
	}
}

export default Movies
