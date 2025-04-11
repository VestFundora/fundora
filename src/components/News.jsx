import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Newspaper, ChevronRight } from 'lucide-react'
import NewsItem from './NewsItem'

function News() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9006adbafda349bca450ba017048536d")
        setNews(res.data.articles)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching news:", error)
        setLoading(false)
      }
    }
    getArticles()
  }, []) // Added dependency array to prevent infinite calls

  return (
    <div className="fixed top-24 right-4 w-80 bg-white rounded-xl shadow-sm p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Newspaper className="h-5 w-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Trending News</h3>
        </div>
        <span className="text-xs text-gray-500">Curated by Fundora News</span>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-4">
            {news.slice(0, 3).map((article, index) => (
              <div
                key={index}
                className="p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer border-l-4 border-transparent hover:border-green-500"
              >
                <NewsItem 
                  title={article.title}
                  url={article.url}
                  Author={article.author}
                  ``
                />
              </div>
            ))}
          </div>

          <a 
            href="https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2 px-4 text-sm text-green-600 hover:text-green-700 font-medium hover:bg-green-50 rounded-lg transition-colors"
          >
            Read More
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </>
      )}
    </div>
  )
}

export default News