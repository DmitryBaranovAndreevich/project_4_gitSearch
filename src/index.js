import './styles/index.scss'
import Form from './scripts/form'
import ResultTable from './scripts/resultTable';
import Item from './scripts/item';

const table = new ResultTable('resultTable', Item);
const form = new Form('form', table);
form.setEventListeners();