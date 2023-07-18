import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'

export class News extends Component {
    
    // static defaultProps = {
    //     country : 'in',
    //     category : 'business',
    //     pageSize : '3'
    // }
    // static PropTypes = {
    //     country : PropTypes.string,
    //     category : PropTypes.string,
    //     pageSize : PropTypes.string

    // }

    constructor(){
        super();
        this.state= {
            articles:[],
            loading : false,
            page:1,
            totalresults:0,
            total:0,
            flag:false,

        }
    }
    
    fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9896f11aeba54cb7baca8615fbd91f0b&page=1&pageSize=${this.props.pageSize}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        let parsedData = data
        
        this.setState({
          loading:false,
          page:this.state.page-1,
          articles:parsedData.articles,
          flag:false
      })
      } catch (error) {
        console.log(error);
      }
    };
    componentDidUpdate(prevProps) {
      if (
        prevProps.country !== this.props.country ||
        prevProps.category !== this.props.category ||
        prevProps.pageSize !== this.props.pageSize
      ) {
        this.fetchNews();
      }
    }


    async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9896f11aeba54cb7baca8615fbd91f0b&page=1&pageSize=${this.props.pageSize}`;
        // let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=${this.props.country}&topic=${this.props.category}&page=1&page_size=${this.props.pageSize}`
        //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9896f11aeba54cb7baca8615fbd91f0b&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data =await fetch(url)
        let parsedData = await data.json()
        this.setState({loading:false,articles:parsedData.articles,totalresults:(parsedData.total_pages*parsedData.page_size)})
        

    }
    handlePrevClick = async ()=>{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9896f11aeba54cb7baca8615fbd91f0b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        //let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=${this.props.country}&topic=${this.props.category}&page=${this.state.page-1}&page_size=${this.props.pageSize}`
        //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9896f11aeba54cb7baca8615fbd91f0b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data =await fetch(url)
        let parsedData = await data.json()
        
        this.setState({
            loading:false,
            page:this.state.page-1,
            articles:parsedData.articles,
            flag:false
        })
        
    }
    handleNextClick = async ()=> {
        console.log("hi")
        if(this.state.page+1 <= Math.ceil(this.state.totalresults/this.props.pageSize)){
          let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9896f11aeba54cb7baca8615fbd91f0b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
         //   let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=${this.props.country}&topic=${this.props.category}&page=${this.state.page+1}&page_size=${this.props.pageSize}`
        //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9896f11aeba54cb7baca8615fbd91f0b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        

        let data =await fetch(url)
        let parsedData = await data.json()
        
        this.setState({
            loading:false,
            page:this.state.page+1,
            articles:parsedData.articles,
            flag:false
        })
        if(this.state.page+1===Math.ceil(this.state.totalresults/this.props.pageSize)){
            this.setState({flag:true})
        }
        }
    }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        <h2 className="text-center">Country : {this.props.country} Topic : {this.props.category} Topics per page : {this.props.pageSize} </h2>
        {this.state.loading && <Spinner />}
        {console.log(this.props,this.state.articles)}
        <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.flag} type="button" className='btn btn-dark'onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
        <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div key={element.url} className='col-md-4'>
                <NewsItem title={element.title?element.title.slice(0,45):"Null"} description={element.description?element.description.slice(0,88):"Null"} imageUrl={element.urlToImage} newsUrl={element.url } />
                </div>
            })}
            
        </div>
        <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.flag} type="button" className='btn btn-dark'onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}

export default News