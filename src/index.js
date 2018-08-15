import dva from 'dva';
import 'rc-texty/assets/index.css';
import 'moment/locale/zh-cn';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/article').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
