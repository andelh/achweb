import axios from "axios"
export default async (req, res) => {
  const { name, email, projectType, projectDescription } = req.body

  try {
    await axios.post(
      "https://hooks.slack.com/services/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",
      {
        text: `💸 New Lead!\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nProject Description: ${projectDescription}`,
      }
    )
    res.statusCode = 200
    res.json({ status: "success" })
  } catch (err) {
    console.log(err.message)
    res.statusCode = 500
    res.json(err)
  }
}
