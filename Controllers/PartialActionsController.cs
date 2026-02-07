using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApp.Controllers
{
    public class PartialActionsController : Controller
    {
        // GET: PartialActions
        public ActionResult ShowApiMessage(string message)
        {
            return PartialView("_APIMessage", message);
        }
    }
}