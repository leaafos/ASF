import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const sports = [
    "aikido",
    "athlétisme",
    "badminton",
    "basketball",
    "boxe thailandaise",
    "capoeira",
    "dance",
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

const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLenght = inputValue.lenght;

    return inputLenght === 0 ? : sports.filter(sport =>
        sport.toLowerCase().slice(0, inputLenght) === inputValue
    );
};

const renderSuggestion = (suggestion) => (
    <div>
        {suggestion}
    </div>
);

const SearchBar = () => {
    const [value, setValue] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
};

const onChange = (event, {newValue}) => {
    setValue(newValue);
};

const onSuggestionsFetchRequested = ({value}) => {
    setSuggestions([]);
}
    
