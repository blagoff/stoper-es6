class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        };
        this.running = false;
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this); 
    }

    print() {
       this.display.innerText = this.format(this.times);
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.running) return;
        this.calculate();
        
    }

   

    calculate() {
        const times = this.state.times;
        times.miliseconds += 1;
        if (times.miliseconds >= 100) {
            times.seconds += 1;
            times.miliseconds = 0;
        }
        if (times.seconds >= 60) {
            times.minutes += 1;
            times.seconds = 0;
        }
        this.setState({times});
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    render() {
        
        return (
          <div className="container">
            <nav className="controls">
                <a className="button dark" href="#" onClick={this.start}>
                    Start
                </a>
                <a className="button normal" href="#" onClick={this.stop}> 
                    Stop 
                </a>
            </nav>
            <div className="stopwatch">
            {this.format(this.state.times)}
            </div>
            <div className="results"></div>
           
            
           
          </div>
        );
      }
}
    


function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}


const app = document.getElementById('app')
ReactDOM.render(<Stopwatch/>, app);






