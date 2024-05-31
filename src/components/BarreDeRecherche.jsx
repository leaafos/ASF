import React, { useState } from 'react';

const sports = [
    "aikido",
    "athlétisme",
    "badminton",
    "basketball",
    "boxe thailandaise",
    "capoeira",
    "danse",
    "ecole des sports",
    "escrime",
    "fitness",
    "gym",
    "football",
    "gymnastique artistique",
    "gymnastique rhytmique",
    "handball",
    "judo",
    "ju jutsu",
    "karate",
    "kung fu",
    "marche nordique",
    "natation",
    "parkour",
    "petanque",
    "rygby",
    "squash",
    "tae kwon do",
    "tennis",
    "tennis de table",
    "volleyball",
    "yoga"
];
const BarreDeRecherche = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
  
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
  
        if (value.length > 0) {
            const filteredSuggestions = sports.filter((sport) =>
            sport.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
        };
    
    const handleSuggestionClick = (suggestion) => {
      setQuery(suggestion);
      setSuggestions([]);
    };
  
    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Rerchercher un sport"
        />
        {suggestions.length > 0 && (
          <ul >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default BarreDeRecherche;