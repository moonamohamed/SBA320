import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../features/jokesSlice';

export default function JokeDisplay() {
    const dispatch = useDispatch();
    const { joke, status } = useSelector((state) => state.joke);

    
}