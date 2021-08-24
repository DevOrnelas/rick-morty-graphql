import { gql, useQuery} from "@apollo/client";

const GET_CHARACTERS = gql`
  {
    characters {
      info {
        count
      }
      results {
        name
        species
        gender
        image
        origin {
          dimension
        }
      }
    }
  }
`;

const DisplayAll = (props) => {
 const {loading, error, data} = useQuery(GET_CHARACTERS)
 if(loading) return <p>Loading...</p>
 if(error) return <p>Error Loading :*( ...</p>

  console.log(data.characters.results)
  let List = data.characters.results.map(character => {
    return (
      <div className="card">
      <img
        src={character.image}
        alt=""
        srcset=""
      />
      <div className="card-desc">
        <h5>
          Name: <span className="nameDesc">{character.name}</span>
        </h5>
        <h5>
          Gender: <span className="genderDesc">{character.gender  }</span>
        </h5>
        <h5>
          Species: <span className="genderDesc">{character.species}</span>
        </h5>
      </div>
    </div>
    )

  })


  return (
    <div className="myContainer">
      <div className="card">
        <img
          src="https://lightning100.com/wp-content/uploads/B41580A4-46E7-4EA7-87F0-646C9C57E981.jpeg"
          alt=""
          srcset=""
        />
        <div className="card-desc">
          <h5>
            Name: <span className="nameDesc">Meg Myers</span>
          </h5>
          <h5>
            Gender: <span className="genderDesc">Female</span>
          </h5>
          <h5>
            Species: <span className="genderDesc">Human</span>
          </h5>
        </div>
      </div>
      {List}
    </div>
  );
};

export default DisplayAll
