export default (req, res) => {
    const {
      query: { id },
    } = req
  
    res.end(`Kweet ID: ${id}`)
  }
  