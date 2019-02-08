package com.cegeka.eventsdashboard.util;

import com.cegeka.eventsdashboard.domain.Post;
import com.cegeka.eventsdashboard.domain.PostVariable;
import com.cegeka.eventsdashboard.domain.Template;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;

import java.io.StringWriter;
import java.util.Optional;
import java.util.Set;

public class Parser {

    private static final VelocityContext  velocityContext = new VelocityContext();
    private static final Log logger = LogFactory.getLog(Parser.class);

    public static Optional<Post> parse(Post post) {

        Optional<Post> optionalPost = null;


            //get post
            Post p = post;

            //get template
            Template template = p.getPostTemplate();

            //get post variables
            Set<PostVariable> postVariablesValues =  p.getVariables();

            //put the variables in context
            postVariablesValues.forEach(v->velocityContext.put(v.getVariable().getName(),v.getValue()));

            StringWriter stringWriter = new StringWriter();

            Velocity.evaluate( velocityContext, stringWriter, "Post Template", template.getContent());

            p.getPostTemplate().setContent(stringWriter.toString());

            logger.debug(stringWriter.toString());

            //returned values processed
            optionalPost = Optional.of(p);


        return optionalPost;
    }

    public static Optional<Post> parse(Optional<Post> post) {

        Optional<Post> optionalPost = null;

        if (post.isPresent()) {
            //get post
            Post p = post.get();

            //get template
            Template template = p.getPostTemplate();

            //get post variables
            Set<PostVariable> postVariablesValues =  p.getVariables();

            //put the variables in context
            postVariablesValues.forEach(v->velocityContext.put(v.getVariable().getName(),v.getValue()));

            StringWriter stringWriter = new StringWriter();

            Velocity.evaluate( velocityContext, stringWriter, "Post Template", template.getContent());

            p.getPostTemplate().setContent(stringWriter.toString());

            //returned values processed
            optionalPost = Optional.of(p);

        }
        return optionalPost;
    }
}
