using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ModelProject;
using ModelProject.Repo;

namespace ApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ProductsController : Controller
    {
        ModelProject.Repo.Repository _Repository { get; set; }
        public ProductsController()
        {
            this._Repository = new ModelProject.Repo.Repository();
        }

        [HttpPost("apiCreateProducts")]
        public ActionResult CreateProduct(Product newProduct)
        {
            _Repository.insertProduct(newProduct);
            return Ok();
        }

        [HttpPost("apiDeleteProduct")]
        public ActionResult DeleteProduct(Product oldProduct)
        {
            _Repository.deleteProduct(oldProduct.Id.ToString());
            return Ok();
        }

        [HttpGet("apiGetProducts")]
        public ActionResult GetProduct()
        {
            var result = _Repository.GetProducts();
            return Ok(result);
        }

        [HttpPost("apiEditProducts")]
        public ActionResult EditProduct(Product editProduct)
        {
            _Repository.updateeProduct(editProduct);
            return Ok();
        }
    }
}
