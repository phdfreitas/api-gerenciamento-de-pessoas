import axios from "axios";

const API_URL = 'http://localhost:8080'

class ReportService {
    
    async generateReportService() {
        const {data} = await axios.get(`${API_URL}/pessoas/relatorio`)
        
        return data
    }
}

export default new ReportService()